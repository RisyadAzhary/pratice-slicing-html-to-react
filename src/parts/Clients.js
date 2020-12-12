import React from "react";
import Fade from "react-reveal/Fade";

import client01 from "assets/images/clients-01.svg";
import client02 from "assets/images/clients-02.svg";
import client03 from "assets/images/clients-03.svg";
import client04 from "assets/images/clients-04.svg";
import client05 from "assets/images/clients-05.svg";

export default function Clients() {
	return (
		<section className="clients">
			<Fade bottom delay={2500}>
				<div className="container">
					<div className="clients-inner section-inner has-top-divider has-bottom-divider">
						<ul className="list-reset">
							<li>
								<img src={client01} alt="Clients 01" />
							</li>
							<li>
								<img src={client02} alt="Clients 02" />
							</li>
							<li>
								<img src={client03} alt="Clients 03" />
							</li>
							<li>
								<img src={client04} alt="Clients 04" />
							</li>
							<li>
								<img src={client05} alt="Clients 05" />
							</li>
						</ul>
					</div>
				</div>
			</Fade>
		</section>
	);
}
