import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3-force";
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react";
import {
  skills,
  skillConnections,
  skillCategories,
  SkillNode,
} from "../data";
import "./SkillTree.css";

interface SimulationNode extends SkillNode {
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
}

interface SimulationLink {
  source: SimulationNode | string;
  target: SimulationNode | string;
  type: "prerequisite" | "related" | "complementary";
}

const SkillTree: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [activeCategories, setActiveCategories] = useState<Set<string>>(
    new Set(skillCategories.map((c) => c.id))
  );
  const [isPanning, setIsPanning] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<d3.Simulation<SimulationNode, SimulationLink> | null>(null);
  const nodesRef = useRef<SimulationNode[]>([]);
  const linksRef = useRef<SimulationLink[]>([]);

  const [, setTick] = useState(0); // Force re-render on simulation tick

  // Get node radius based on proficiency
  const getNodeRadius = (proficiency: number) => {
    return 20 + proficiency * 4; // 24-40px
  };

  // Get category color
  const getCategoryColor = (categoryId: string) => {
    return skillCategories.find((c) => c.id === categoryId)?.color || "#818cf8";
  };

  // Get edge style based on type
  const getEdgeStyle = (type: string) => {
    switch (type) {
      case "prerequisite":
        return { strokeDasharray: "none", strokeWidth: 2 };
      case "related":
        return { strokeDasharray: "5,5", strokeWidth: 1.5 };
      case "complementary":
        return { strokeDasharray: "2,2", strokeWidth: 1 };
      default:
        return { strokeDasharray: "none", strokeWidth: 1.5 };
    }
  };

  // Initialize force simulation
  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    // Create copies of nodes and links for the simulation
    nodesRef.current = skills.map((skill) => ({ ...skill }));
    linksRef.current = skillConnections.map((conn) => ({ ...conn }));

    // Create the simulation
    const simulation = d3
      .forceSimulation<SimulationNode>(nodesRef.current)
      .force(
        "link",
        d3
          .forceLink<SimulationNode, SimulationLink>(linksRef.current)
          .id((d) => d.id)
          .distance(100)
          .strength(0.5)
      )
      .force("charge", d3.forceManyBody<SimulationNode>().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collision",
        d3
          .forceCollide<SimulationNode>()
          .radius((d) => getNodeRadius(d.proficiency) + 10)
      );

    simulationRef.current = simulation;

    // Update positions on each tick
    simulation.on("tick", () => {
      setTick((t) => t + 1);
    });

    return () => {
      simulation.stop();
    };
  }, []);

  // Filter nodes and links based on active categories
  const filteredNodes = nodesRef.current.filter((node) =>
    activeCategories.has(node.category)
  );
  const filteredLinks = linksRef.current.filter((link) => {
    const sourceNode =
      typeof link.source === "string"
        ? nodesRef.current.find((n) => n.id === link.source)
        : link.source;
    const targetNode =
      typeof link.target === "string"
        ? nodesRef.current.find((n) => n.id === link.target)
        : link.target;
    return (
      sourceNode &&
      targetNode &&
      activeCategories.has(sourceNode.category) &&
      activeCategories.has(targetNode.category)
    );
  });

  // Check if a link is connected to the selected node
  const isLinkHighlighted = (link: SimulationLink) => {
    if (!selectedSkill) return false;
    const sourceId = typeof link.source === "string" ? link.source : link.source.id;
    const targetId = typeof link.target === "string" ? link.target : link.target.id;
    return sourceId === selectedSkill || targetId === selectedSkill;
  };

  // Check if a node is connected to the selected node
  const isNodeConnected = (nodeId: string) => {
    if (!selectedSkill || nodeId === selectedSkill) return true;
    return linksRef.current.some((link) => {
      const sourceId = typeof link.source === "string" ? link.source : link.source.id;
      const targetId = typeof link.target === "string" ? link.target : link.target.id;
      return (
        (sourceId === selectedSkill && targetId === nodeId) ||
        (targetId === selectedSkill && sourceId === nodeId)
      );
    });
  };

  // Handle node click - focus and recenter
  const handleNodeClick = (node: SimulationNode) => {
    setSelectedSkill(node.id === selectedSkill ? null : node.id);

    // Recenter view on the clicked node
    if (svgRef.current && node.x !== undefined && node.y !== undefined) {
      const width = svgRef.current.clientWidth;
      const height = svgRef.current.clientHeight;
      const targetX = width / 2 - node.x * transform.scale;
      const targetY = height / 2 - node.y * transform.scale;

      setTransform({
        ...transform,
        x: targetX,
        y: targetY,
      });
    }
  };

  // Handle zoom
  const handleZoom = (delta: number) => {
    setTransform((prev) => ({
      ...prev,
      scale: Math.max(0.5, Math.min(2, prev.scale + delta)),
    }));
  };

  // Handle reset view
  const handleReset = () => {
    if (!svgRef.current) return;
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    setTransform({ x: 0, y: 0, scale: 1 });
    setSelectedSkill(null);

    // Re-center the simulation
    if (simulationRef.current) {
      simulationRef.current.force("center", d3.forceCenter(width / 2, height / 2));
      simulationRef.current.alpha(0.3).restart();
    }
  };

  // Handle category filter toggle
  const toggleCategory = (categoryId: string) => {
    setActiveCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  // Handle pan start
  const handlePanStart = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".skill-node")) return;
    setIsPanning(true);
    setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
  };

  // Handle pan move
  const handlePanMove = (e: React.MouseEvent) => {
    if (!isPanning) return;
    setTransform((prev) => ({
      ...prev,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    }));
  };

  // Handle pan end
  const handlePanEnd = () => {
    setIsPanning(false);
  };

  // Handle node drag start
  const handleNodeDragStart = (node: SimulationNode, e: React.MouseEvent) => {
    e.stopPropagation();
    if (simulationRef.current) {
      simulationRef.current.alphaTarget(0.3).restart();
      node.fx = node.x;
      node.fy = node.y;
    }
  };

  // Add mouse move and up listeners for dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const draggingNode = nodesRef.current.find(
        (n) => n.fx !== null && n.fx !== undefined
      );
      if (draggingNode && svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - transform.x) / transform.scale;
        const y = (e.clientY - rect.top - transform.y) / transform.scale;
        draggingNode.fx = x;
        draggingNode.fy = y;
      }
    };

    const handleMouseUp = () => {
      nodesRef.current.forEach((node) => {
        if (node.fx !== null) {
          node.fx = null;
          node.fy = null;
        }
      });
      if (simulationRef.current) {
        simulationRef.current.alphaTarget(0);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [transform]);

  // Add native wheel listener to prevent page scroll
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const handleNativeWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setTransform((prev) => ({
        ...prev,
        scale: Math.max(0.5, Math.min(2, prev.scale + delta)),
      }));
    };

    svg.addEventListener("wheel", handleNativeWheel, { passive: false });

    return () => {
      svg.removeEventListener("wheel", handleNativeWheel);
    };
  }, []);

  const selectedNode = selectedSkill
    ? skills.find((s) => s.id === selectedSkill)
    : null;

  return (
    <div className="skill-tree" ref={containerRef}>
      <div className="skill-tree__controls">
        <div className="skill-tree__zoom-controls">
          <button
            className="skill-tree__control-btn"
            onClick={() => handleZoom(0.2)}
            aria-label="Zoom in"
          >
            <ZoomIn size={20} />
          </button>
          <button
            className="skill-tree__control-btn"
            onClick={() => handleZoom(-0.2)}
            aria-label="Zoom out"
          >
            <ZoomOut size={20} />
          </button>
          <button
            className="skill-tree__control-btn"
            onClick={handleReset}
            aria-label="Reset view"
          >
            <Maximize2 size={20} />
          </button>
        </div>

        <div className="skill-tree__category-filters">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`skill-tree__category-btn ${
                activeCategories.has(category.id) ? "active" : ""
              }`}
              style={
                activeCategories.has(category.id)
                  ? { borderColor: category.color, color: category.color }
                  : {}
              }
              onClick={() => toggleCategory(category.id)}
            >
              <span
                className="skill-tree__category-dot"
                style={{ backgroundColor: category.color }}
              />
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="skill-tree__legend">
        <div className="skill-tree__legend-item">
          <div className="skill-tree__legend-line skill-tree__legend-line--solid" />
          <span>Prerequisite</span>
        </div>
        <div className="skill-tree__legend-item">
          <div className="skill-tree__legend-line skill-tree__legend-line--dashed" />
          <span>Related</span>
        </div>
        <div className="skill-tree__legend-item">
          <div className="skill-tree__legend-line skill-tree__legend-line--dotted" />
          <span>Complementary</span>
        </div>
      </div>

      <svg
        ref={svgRef}
        className="skill-tree__canvas"
        onMouseDown={handlePanStart}
        onMouseMove={handlePanMove}
        onMouseUp={handlePanEnd}
        onMouseLeave={handlePanEnd}
      >
        <g transform={`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`}>
          {/* Render edges */}
          {filteredLinks.map((link, index) => {
            const source =
              typeof link.source === "string"
                ? nodesRef.current.find((n) => n.id === link.source)
                : link.source;
            const target =
              typeof link.target === "string"
                ? nodesRef.current.find((n) => n.id === link.target)
                : link.target;

            if (
              !source ||
              !target ||
              source.x === undefined ||
              source.y === undefined ||
              target.x === undefined ||
              target.y === undefined
            ) {
              return null;
            }

            const style = getEdgeStyle(link.type);
            const isHighlighted = isLinkHighlighted(link);

            return (
              <line
                key={`${source.id}-${target.id}-${index}`}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                className={`skill-edge ${isHighlighted ? "skill-edge--highlighted" : ""}`}
                strokeDasharray={style.strokeDasharray}
                strokeWidth={style.strokeWidth}
              />
            );
          })}

          {/* Render nodes */}
          {filteredNodes.map((node) => {
            if (node.x === undefined || node.y === undefined) return null;

            const radius = getNodeRadius(node.proficiency);
            const isSelected = selectedSkill === node.id;
            const isHovered = hoveredSkill === node.id;
            const isDimmed = selectedSkill && !isNodeConnected(node.id);

            return (
              <g
                key={node.id}
                className={`skill-node ${isSelected ? "skill-node--selected" : ""} ${
                  isDimmed ? "skill-node--dimmed" : ""
                }`}
                transform={`translate(${node.x}, ${node.y})`}
                onClick={() => handleNodeClick(node)}
                onMouseEnter={() => setHoveredSkill(node.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                onMouseDown={(e) => handleNodeDragStart(node, e)}
                style={{ cursor: "pointer" }}
              >
                <circle
                  r={radius}
                  fill={getCategoryColor(node.category)}
                  className="skill-node__circle"
                />
                <text
                  className="skill-node__text"
                  textAnchor="middle"
                  dy=".35em"
                  fontSize={radius > 30 ? "12px" : "10px"}
                >
                  {node.name}
                </text>

                {/* Tooltip on hover */}
                {isHovered && (
                  <g className="skill-node__tooltip">
                    <rect
                      x={radius + 5}
                      y={-20}
                      width={150}
                      height={40}
                      rx={4}
                      className="skill-node__tooltip-bg"
                    />
                    <text
                      x={radius + 10}
                      y={-10}
                      className="skill-node__tooltip-title"
                      fontSize="12px"
                    >
                      {node.name}
                    </text>
                    <text
                      x={radius + 10}
                      y={5}
                      className="skill-node__tooltip-desc"
                      fontSize="10px"
                    >
                      Proficiency: {node.proficiency}/5
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </g>
      </svg>

      {/* Details panel */}
      {selectedNode && (
        <div className="skill-tree__details">
          <h3 className="skill-tree__details-title">{selectedNode.name}</h3>
          <p className="skill-tree__details-category">
            {skillCategories.find((c) => c.id === selectedNode.category)?.name}
          </p>
          <div className="skill-tree__details-proficiency">
            <span>Proficiency:</span>
            <div className="skill-tree__proficiency-bar">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`skill-tree__proficiency-level ${
                    level <= selectedNode.proficiency ? "active" : ""
                  }`}
                  style={
                    level <= selectedNode.proficiency
                      ? {
                          backgroundColor: getCategoryColor(selectedNode.category),
                        }
                      : {}
                  }
                />
              ))}
            </div>
          </div>
          <p className="skill-tree__details-description">{selectedNode.description}</p>
        </div>
      )}
    </div>
  );
};

export default SkillTree;
