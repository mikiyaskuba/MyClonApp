import React from "react";
import "./header.css";
import Netflix from "../../../src/images/Netflix_2015_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
	return (
		<div className="header_outer_container">
			<div className="header_container">
				<div className="header_left">
					<ul>
						<li>
							<img src={Netflix} width="100" />
						</li>
						<li>Home</li>
						<li>TvShows</li>
						<li>Movies</li>
						<li>Latest</li>
						<li>Mylist</li>
						<li>Browse by Language</li>
					</ul>
				</div>
				<div className="header_right col-2 ">
					<ul>
						<li>
							<SearchIcon />
						</li>
						<li>
							<NotificationsNoneIcon />
						</li>
						<li>
							<AccountBoxIcon />
						</li>
						<li>
							<ArrowDropDownIcon />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
