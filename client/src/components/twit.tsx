import * as React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import { Button } from "../components/button";

interface IProps {
  author: any;
  username?: string;
  twitText: string;
  replies?: number;
  reTwits?: number;
  likes?: number;
  img?: string;
  createdAt?: any;
}
export const Twit: React.SFC<IProps> = ({
  author,
  username,
  twitText,
  replies,
  reTwits,
  likes,
  img,
  createdAt
}) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  return (
    <div className="card">
      <div className="card-body row">
        <div className="col-md-1">
          <img src={img} className="card-img" />
        </div>

        <div className="col-md-10 ml-4  mr-0">
          <div className="card-title d-flex justify-content-between">
            <h6 className="">
              <a href={author.username} className="card-link">
                {author.name}
              </a>
              <a href={author.username} className="card-link text-muted">
                @{author.username}
              </a>
              {" . "}
              <span className="text-muted">
                {timeAgo.format(new Date(createdAt), "twitter")}
              </span>
            </h6>

            <span className="dropdown ml-4 mr-0">
              <span className="caret dropdown-toggle" data-toggle="dropdown" />
              <div
                className="dropdown-menu"
                style={{ border: "1px solid green" }}
              >
                <Button
                  className="dropdown-item nav-link btn-primary mr-4"
                  value="Follow"
                />
                <Button
                  className="dropdown-item nav-link mr-4"
                  value="Comment"
                />
              </div>
            </span>
          </div>

          <p className="card-text">{twitText}</p>
          <div className="col-sm-8 bg-transparent d-flex justify-content-between m-auto">
            {/* <a href="#" className="card-link text-muted">
              <i className="fa fa-comment-o mr-2" />
              {replies}
            </a>
            <a href="#" className="card-link text-muted">
              <i className="fa fa-envelope-o  mr-2" />
              {reTwits}
            </a>
            <a href="#" className="card-link text-muted">
              <i className="fa fa-heart-o mr-2" />
              {likes}
            </a>
            <a href="#" className="card-link text-muted">
              <i className="fa fa-envelope-o  mr-2" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
