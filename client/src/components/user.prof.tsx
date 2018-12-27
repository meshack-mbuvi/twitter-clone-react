import * as React from "react";

interface IProps {
  username: string;
  bio?: string;
  name: string;
  joined: Date;
}
export const ProfileData: React.SFC<IProps> = ({
  username,
  bio,
  name,
  joined
}) => {
  const monthNames = [
    "January ",
    "February ",
    "March ",
    "April ",
    "May ",
    "June ",
    "July ",
    "August ",
    "September ",
    "October ",
    "November ",
    "December "
  ];
  return (
    <div>
      <div className="card-body">
        <h4 className="card-title">
          <a href="#" className="card-link">
            {name}
          </a>
        </h4>
        <h6 className="card-subtitle mb-2 text-muted">@{username}</h6>
        <p className="card-text">
          Software Developer @Andela Am highly motivated, goal-oriented,a team
          player, a hard worker, adaptable and self confident. I dream software.
          {bio}
        </p>
        <div className="m-auto text-muted">
          <span className="text-muted">
            Joined {monthNames[joined.getMonth()]} {joined.getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};
