"use client"

import { useState } from "react"

interface TimelineItemProps {
  date: string
  title: string
  description: string
  fullDescription: string
}

export default function TimelineItem({ date, title, description, fullDescription }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative flex flex-col items-center">
      {/* Timeline dot */}
      <div className="w-4 h-4 bg-emerald-600 rounded-full z-10"></div>

      {/* Content */}
      <div className="mt-4 w-48 text-center">
        <div className="text-sm font-medium">{date}</div>
        <div className="text-xs text-gray-500 mb-1">{title}</div>

        <div
          className="text-sm text-gray-600 cursor-pointer hover:text-emerald-600 transition-colors"
          onClick={() => setIsExpanded(true)}
        >
          <p className={`${isExpanded ? "" : "line-clamp-2"}`}>{isExpanded ? fullDescription : description}</p>
          {!isExpanded && description.length > 70 && (
            <span className="text-xs text-emerald-600 block mt-1">Click to read more</span>
          )}
        </div>

        {/* Modal for full description */}
        {isExpanded && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setIsExpanded(false)}
          >
            <div className="bg-white p-6 rounded-lg max-w-md mx-4 relative" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setIsExpanded(false)}
              >
                ✕
              </button>
              <h3 className="font-medium mb-1">{title}</h3>
              <div className="text-sm text-gray-500 mb-3">{date}</div>
              <p className="text-sm text-gray-600">{fullDescription}</p>
              <button
                className="mt-4 text-sm text-emerald-600 hover:text-emerald-700"
                onClick={() => setIsExpanded(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
