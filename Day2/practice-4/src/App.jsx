import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import SkillBadge from "./SkillBadge";

export default function App() {
  return (
    <ProfileCard>
      <ProfileHeader
        name="Chinwe Okoro"
        title="Senior Developer at Paystack"
        avatar="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
      />
      <ProfileStats projects={45} followers="1.2K" following={300} />

      <h3 style={{ textAlign: "center" }}>Skills:</h3>
      <div style={{ textAlign: "center" }}>
        <SkillBadge skill="React" level="Expert" />
        <SkillBadge skill="JavaScript" level="Expert" />
        <SkillBadge skill="CSS" level="Intermediate" />
        <SkillBadge skill="Python" level="Beginner" />
      </div>
    </ProfileCard>
  );
}
