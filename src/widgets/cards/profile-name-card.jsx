import { Avatar } from "@material-tailwind/react";

import React from "react";

export function ProfileNameCard() {
  return (
    <div className="flex items-center gap-6">
      <Avatar
        src="/img/bruce-mars.jpeg"
        alt="bruce-mars"
        size="xl"
        className="rounded-lg shadow-lg shadow-blue-gray-500/40"
      />
    </div>
  );
}

export default ProfileNameCard;
