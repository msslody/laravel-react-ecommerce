import React from 'react';

export default function OrderStatusTable() {
  const orders = [
    {
      id: 1,
      client: 'Henry Klein',
      orderNo: '02312',
      cost: '$14,500',
      project: 'Dashboard',
      paymentMode: 'Credit card',
      date: '04 Dec 2019',
      status: 'Approved',
      statusClass: 'success'
    },
    {
      id: 2,
      client: 'Estella Bryan',
      orderNo: '02312',
      cost: '$14,500',
      project: 'Website',
      paymentMode: 'Cash on delivered',
      date: '04 Dec 2019',
      status: 'Pending',
      statusClass: 'warning'
    },
    {
      id: 3,
      client: 'Lucy Abbott',
      orderNo: '02312',
      cost: '$14,500',
      project: 'App design',
      paymentMode: 'Credit card',
      date: '04 Dec 2019',
      status: 'Rejected',
      statusClass: 'danger'
    },
    {
      id: 4,
      client: 'Peter Gill',
      orderNo: '02312',
      cost: '$14,500',
      project: 'Development',
      paymentMode: 'Online Payment',
      date: '04 Dec 2019',
      status: 'Approved',
      statusClass: 'success'
    },
    {
      id: 5,
      client: 'Sallie Reyes',
      orderNo: '02312',
      cost: '$14,500',
      project: 'Website',
      paymentMode: 'Credit card',
      date: '04 Dec 2019',
      status: 'Approved',
      statusClass: 'success'
    }
  ];

  return (
    <div className="col-12 grid-margin">
      <div className="card dark-card">
        <div className="card-body">
          <h4 className="card-title">Order Status</h4>
          <div className="table-responsive">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>
                    <div className="form-check form-check-muted m-0">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input"/>
                      </label>
                    </div>
                  </th>
                  <th>Client Name</th>
                  <th>Order No</th>
                  <th>Product Cost</th>
                  <th>Project</th>
                  <th>Payment Mode</th>
                  <th>Start Date</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <div className="form-check form-check-muted m-0">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input"/>
                        </label>
                      </div>
                    </td>
                    <td>
                      <img 
                        src={`/admin/images/faces/face${order.id}.jpg`} 
                        alt={order.client}
                        className="img-xs rounded-circle mr-2"
                      />
                      <span>{order.client}</span>
                    </td>
                    <td>{order.orderNo}</td>
                    <td>{order.cost}</td>
                    <td>{order.project}</td>
                    <td>{order.paymentMode}</td>
                    <td>{order.date}</td>
                    <td>
                      <div className={`badge badge-outline-${order.statusClass}`}>
                        {order.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}