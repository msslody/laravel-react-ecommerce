import React from 'react';

export default function ShopMenu({ products }) {
  return (
    <section className="ftco-menu mb-5 pb-5">
      <div className="container">
        <div className="row d-md-flex">
          <div className="col-lg-12 p-md-5">
            <div className="row">
              <div className="col-md-12 nav-link-wrap mb-5">
                <div className="nav nav-pills justify-content-center" id="v-pills-tab" role="tablist">
                  <a className="nav-link active" id="v-pills-0-tab" data-toggle="pill" href="#v-pills-0" role="tab">All Products</a>
                </div>
              </div>
              <div className="col-md-12 d-flex align-items-center">
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-0" role="tabpanel">
                    <div className="row">
                      {products.map(product => (
                        <div key={product.id} className="col-md-3">
                          <div className="menu-entry">
                            <a href="#" className="img" style={{ backgroundImage: `url(${product.image})` }}

                            ></a>
                            <div className="text text-center pt-4">
                              <h3><a href="#">{product.title}</a></h3>
                              <p>{product.description}</p>
                              <p className="price"><span>${product.price}</span></p>
                              <p><a href="cart.html" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
  
}

