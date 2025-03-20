import React from "react";

export default function Appointment() {
  return (
    <section className="ftco-appointment">
      <div className="overlay"></div>
      <div className="container-wrap">
        <div className="row no-gutters d-md-flex align-items-center">
          <div className="col-md-6 d-flex align-self-stretch p-5">
            <iframe
              title="RUPP Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15631.978292404668!2d104.88275585!3d11.567743649999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109515fd710157b%3A0x7dc8a21e27203a0b!2sRoyal%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1710000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-6 appointment">
            <h3 className="mb-3">Book a Table</h3>
            <form action="#" className="appointment-form">
                <div className="d-md-flex">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name"/>
                    </div>
                    <div className="form-group ml-md-4">
                        <input type="text" className="form-control" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="d-md-flex">
                    <div className="form-group">
                        <div className="input-wrap">
                    <div className="icon"><span className="ion-md-calendar"></span></div>
                    <input type="text" className="form-control appointment_date" placeholder="Date"/>
                </div>
                    </div>
                    <div className="form-group ml-md-4">
                        <div className="input-wrap">
                    <div className="icon"><span className="ion-ios-clock"></span></div>
                    <input type="text" className="form-control appointment_time" placeholder="Time"/>
                </div>
                    </div>
                    <div className="form-group ml-md-4">
                        <input type="text" className="form-control" placeholder="Phone"/>
                    </div>
                </div>
                <div className="d-md-flex">
                    <div className="form-group">
                    <textarea name="" id="" cols="30" rows="2" className="form-control" placeholder="Message"></textarea>
                    </div>
                    <div className="form-group ml-md-4">
                    <input type="submit" value="Appointment" className="btn btn-primary py-3 px-4"/>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
