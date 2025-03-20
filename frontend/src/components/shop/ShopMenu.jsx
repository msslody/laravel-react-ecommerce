import React from 'react'

export default function ShopMenu() {
  return (
    <>
         <section className="ftco-menu mb-5 pb-5">
    	<div className="container">
    		<div className="row d-md-flex">
	    		<div className="col-lg-12  p-md-5">
		    		<div className="row">
		          <div className="col-md-12 nav-link-wrap mb-5">
		            <div className="nav  nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
		            	<a className="nav-link active" id="v-pills-0-tab" data-toggle="pill" href="#v-pills-0" role="tab" aria-controls="v-pills-0" aria-selected="true">Coffee</a>

		              <a className="nav-link" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="false">Main Dish</a>

		              <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Drinks</a>

		              <a className="nav-link" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Desserts</a>
		            </div>
		          </div>
		          <div className="col-md-12 d-flex align-items-center">
		            
		            <div className="tab-content " id="v-pills-tabContent">

		              <div className="tab-pane fade show active" id="v-pills-0" role="tabpanel" aria-labelledby="v-pills-0-tab">
		              	<div className="row">
		              		<div className="col-md-3">
						        		<div className="menu-entry">
						    					<a href="#" className="img" style={{ backgroundImage: "url(images/menu-1.jpg)"}}></a>
						    					<div className="text text-center pt-4">
						    						<h3><a href="product-single.html">Coffee Capuccino</a></h3>
						    						<p>A small river named Duden flows by their place and supplies</p>
						    						<p className="price"><span>$5.90</span></p>
						    						<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
						    					</div>
						    				</div>
						        	</div>
						        	<div className="col-md-3">
						        		<div className="menu-entry">
						    					<a href="#" className="img" style={{ backgroundImage: "url(images/menu-2.jpg)"}}></a>
						    					<div className="text text-center pt-4">
						    						<h3><a href="product-single.html">Coffee Capuccino</a></h3>
						    						<p>A small river named Duden flows by their place and supplies</p>
						    						<p className="price"><span>$5.90</span></p>
						    						<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
						    					</div>
						    				</div>
						        	</div>
						        	<div className="col-md-3">
						        		<div className="menu-entry">
						    					<a href="#" className="img" style={{ backgroundImage: "url(images/menu-3.jpg)"}}></a>
						    					<div className="text text-center pt-4">
						    						<h3><a href="product-single.html">Coffee Capuccino</a></h3>
						    						<p>A small river named Duden flows by their place and supplies</p>
						    						<p className="price"><span>$5.90</span></p>
						    						<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
						    					</div>
						    				</div>
						        	</div>
						        	<div className="col-md-3">
						        		<div className="menu-entry">
						    					<a href="#" className="img" style={{ backgroundImage: "url(images/menu-4.jpg)"}}></a>
						    					<div className="text text-center pt-4">
						    						<h3><a href="product-single.html">Coffee Capuccino</a></h3>
						    						<p>A small river named Duden flows by their place and supplies</p>
						    						<p className="price"><span>$5.90</span></p>
						    						<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
						    					</div>
						    				</div>
						        	</div>
		              	</div>
		              </div>

		              <div className="tab-pane fade" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
		                <div className="row">
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/dish-1.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Grilled Beef</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/dish-2.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Grilled Beef</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/dish-3.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Grilled Beef</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/dish-4.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Grilled Beef</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/dish-5.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Grilled Beef</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/dish-6.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Grilled Beef</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              	</div>
		              </div>

		              <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
		                <div className="row">
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/drink-1.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Lemonade Juice</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/drink-2.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Pineapple Juice</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/drink-3.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Soda Drinks</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/drink-4.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Lemonade Juice</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/drink-5.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Pineapple Juice</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/drink-6.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Soda Drinks</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              	</div>
		              </div>

		              <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
		                <div className="row">
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/dessert-1.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Hot Cake Honey</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/dessert-2.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Hot Cake Honey</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/dessert-3.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Hot Cake Honey</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/dessert-4.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Hot Cake Honey</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/dessert-5.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Hot Cake Honey</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              		<div className="col-md-4 text-center">
		              			<div className="menu-wrap">
		              				<a href="#" className="menu-img img mb-4" style={{ backgroundImage: "url(images/dessert-6.jpg)"}}></a>
		              				<div className="text">
		              					<h3><a href="product-single.html">Hot Cake Honey</a></h3>
		              					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
		              					<p className="price"><span>$2.90</span></p>
		              					<p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to cart</a></p>
		              				</div>
		              			</div>
		              		</div>
		              	</div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
    	</div>
    </section>
    </>
  )
}
