import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js components
Chart.register(...registerables);

export default function TransactionChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
  
    useEffect(() => {
      if (chartRef.current) {
        // Destroy previous chart instance if exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
  
        const ctx = chartRef.current.getContext('2d');
        
        chartInstance.current = new Chart(ctx, {
          type: 'line', // or 'bar', 'pie', etc.
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
              label: 'Transactions',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              tension: 0.1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
            },
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
  
      // Cleanup function to destroy chart on unmount
      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }, []);
  
    return <canvas ref={chartRef} id="transaction-history" className="transaction-chart"></canvas>;
}
