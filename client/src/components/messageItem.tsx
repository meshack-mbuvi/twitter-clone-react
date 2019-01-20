import * as React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

interface IProps {
  from?: any;
  text?: string;
  createdAt: Date;
}
export const MessageItem: React.SFC<IProps> = ({ from, text, createdAt }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  return (
    <div className="card message-card">
      <div className="p-2 row">
        <div className="col-md-1">
          <img src="https://picsum.photos/50/50/?random" className="card-img" />
        </div>

        <div className="card-title col-md-10 message-body">
          <div className="p-2 d-flex justify-content-between">
            <h6 className="p-1">
              <a href={from.username} className="card-link">
                {from.name}
              </a>
              <a href={from.username} className="card-link text-muted">
                @{from.username}
              </a>
            </h6>
            <span className="text-muted">
              {timeAgo.format(new Date(createdAt), "twitter")}
            </span>
          </div>
          <div className="card-text d-flex p-2">
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
