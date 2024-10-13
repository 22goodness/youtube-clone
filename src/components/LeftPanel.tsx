import React from 'react';
import {
  LucideChevronRight,
  LucideFlag,
  LucideHelpCircle,
  LucidePlaySquare,
  LucideSettings,
  LucideThumbsUp,
} from "lucide-react";
import Footer from "./Footer";

type TListItem = {
  icon: React.ReactNode; // Changed from string to React.ReactNode
  name: string;
};

const baseListItem: TListItem[] = [
  { icon: "", name: "Home" },
  { icon: "", name: "Shorts" },
  { icon: "", name: "Subscriptions" },
];

const youListItem: TListItem[] = [
  { icon: "", name: "Your channel" },
  { icon: "", name: "History" },
  { icon: "", name: "Playlist" },
  { icon: <LucidePlaySquare />, name: "Your videos" },
  { icon: "", name: "Your podcasts" },
  { icon: "", name: "Watch later" },
  { icon: <LucideThumbsUp size={16} />, name: "Liked videos" },
];

const exploreListItem: TListItem[] = [
  { icon: "", name: "Trending" },
  { icon: "", name: "Music" },
  { icon: "", name: "Gaming" },
  { icon: <LucidePlaySquare />, name: "News" },
  { icon: "", name: "Sports" },
];

const moreListItem: TListItem[] = [
  { icon: "", name: "Youtube Premium" },
  { icon: "", name: "Youtube Studio" },
  { icon: "", name: "Youtube Music" },
  { icon: <LucidePlaySquare />, name: "Youtube Kids" },
];

const otherListItem: TListItem[] = [
  { icon: <LucideSettings />, name: "Settings" },
  { icon: <LucideFlag />, name: "Report history" },
  { icon: <LucideHelpCircle />, name: "Help" },
  { icon: "", name: "Send Feedback" },
];

function LeftPanel() {
  return (
    <div className="px-2">
      <ul className="menu menu-md rounded-box w-full gap-y-2">
        {baseListItem.map((item, index) => (
          <li key={index}>
            <a className="flex flex-row items-center gap-x-4 px-1">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-8 rounded-full">
                  <span className="text-xs">{item.name[0]}</span>
                </div>
              </div>
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="divider divider-neutral"></div>

      {/* You Section */}
      <div>
        <div className="btn btn-block justify-start">
          <a href="#" className="flex flex-row items-center gap-x-2 p-2">
            <span>You</span> <LucideChevronRight />
          </a>
        </div>
        <ul className="menu menu-md rounded-box w-full gap-y-2">
          {youListItem.map((item, index) => (
            <li key={index}>
              <a className="flex flex-row items-center gap-x-4 px-1">
                {item.icon ? (
                  <div className="avatar">
                    <div className="bg-neutral text-neutral-content w-8 h-8 rounded-full text-center">
                      {item.icon}
                    </div>
                  </div>
                ) : (
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                      <span className="text-xs">{item.name[0]}</span>
                    </div>
                  </div>
                )}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* More sections follow the same pattern... */}

      <div className="divider divider-neutral"></div>

      {/* The Footer */}
      <Footer />
    </div>
  );
}

export default LeftPanel;
