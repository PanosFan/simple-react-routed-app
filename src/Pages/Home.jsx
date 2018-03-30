import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
	render () {
		return (
			<div className="Home">				
				<section id="section-a" >
					<div className="container text-center">
						<h2 >Web & Application Development</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consequuntur eaque pariatur quia deleniti culpa in illum nihil alias labore, iste non blanditiis ullam esse natus necessitatibus, sit officiis fugiat iure earum incidunt, velit reprehenderit aspernatur vitae id! Aspernatur, odio.</p>
					</div>
				</section>	

				<section id="section-b" >
					<div className="container text-center">
						<ul className="flex">
							<li className="card">
								<img src={require('../Images/card1.jpg')} alt=""/>													
								<div className="container">
									<h3>Web development</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis vero labore voluptatem incidunt, ipsa facilis iste obcaecati similique alias, repudiandae minima earum sint, aut rem voluptatibus. Soluta similique nihil, unde.</p>
								</div>
							</li>

							<li className="card">
								<img src={require('../Images/card2.jpg')} alt="" />				
								<div className="container">
									<h3>Mobile applications</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis vero labore voluptatem incidunt, ipsa facilis iste obcaecati similique alias, repudiandae minima earum sint, aut rem voluptatibus. Soluta similique nihil, unde.</p>
								</div>
							</li>

							<li className="card">
								<img src={require('../Images/card3.jpg')} alt="" />				
								<div className="container">
									<h3>Marketing</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis vero labore voluptatem incidunt, ipsa facilis iste obcaecati similique alias, repudiandae minima earum sint, aut rem voluptatibus. Soluta similique nihil, unde.</p>
								</div>
							</li>
						</ul>
					</div>
				</section>	
			</div>
		);
	}
}


export default Home;