import * as React from "react";

interface IProps {
  twitsCount?: number;
  followsCount?: number;
  followersCount?: number;
}
export const UserStats: React.SFC<IProps> = ({
  twitsCount,
  followsCount,
  followersCount
}) => {
  return (
    <div className="row stats">
      <div className="col-md-4">
        <div className="row">
          <a href="#">
            <div className="col-md-12">Twits</div>
          </a>
          <div className="col-md-12 m-auto">{twitsCount}</div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <a href="#">
            <div className="col-md-12">Following</div>
          </a>
          <div className="col-md-12">{followsCount}</div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <a href="#">
            <div className="col-md-12">Followers</div>
          </a>
          <div className="col-md-12">{followersCount}</div>
        </div>
      </div>
    </div>
  );
};
