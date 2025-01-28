import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ProgressBar from '@ramonak/react-progress-bar';

const pieData = [
  { name: 'Initiated', value: 30 },
  { name: 'Pending', value: 20 },
  { name: 'Signed', value: 40 },
  { name: 'Expired', value: 10 },
];

const eStampData = [
  { name: 'Initiated', count: 30 },
  { name: 'Pending', count: 20 },
  { name: 'Spined', count: 40 },
  { name: 'Expired', count: 10 },
];

const eSignData = [
  { name: 'Initiated', count: 25 },
  { name: 'Pending', count: 15 },
  { name: 'Signed', count: 35 },
  { name: 'Expired', count: 5 },
];

const DashboardContent = () => {
  const [startDate, setStartDate] = useState(new Date('2020-03-01'));

  return (
    <div className="dashboard-content">
      <div className="box">
        <section className="frequently-used">
          <h3>Frequently Used</h3>
          <div className="card-container">
            <div className="card">
              <h4>Contract Execution Upload</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Seneatus sed urna ac tempus ennare.</p>
              <button>Get started &gt;&gt;</button>
            </div>
            <div className="card">
              <h4>E-Stamp Services</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Munti adipiscing vulputate mebbL...</p>
              <button>Get started &gt;&gt;</button>
            </div>
            <div className="card">
              <h4>E-sign Services</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Mauris enim pulvinar blandiam augue eu.</p>
              <button>Get started &gt;&gt;</button>
            </div>
          </div>
        </section>
      </div>

      <div className="box">
        <section className="order-details">
          <h3>Order Details</h3>
          <div className="details-container">
            <div className="detail-card">
              <p>Total Orders</p>
              <h4>18</h4>
              <small>4 sina</small>
            </div>
            <div className="detail-card">
              <p>In progress</p>
              <h4>10</h4>
              <small>4 sina</small>
            </div>
            <div className="detail-card">
              <p>Completed Order</p>
              <h4>5</h4>
              <small>4 sina</small>
            </div>
            <div className="detail-card">
              <p>Custom range</p>
              <h4>3</h4>
              <small>4 sina</small>
            </div>
          </div>
        </section>
      </div>

      <div className="box">
        <section className="e-stamp-graph">
          <h3>E-Stamp Count</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={eStampData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>

      <div className="box">
        <section className="e-sign-graph">
          <h3>E-Sign Count</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={eSignData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>

      <div className="box">
        <section className="calendar-section">
          <h3>March 2020 Calendar</h3>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
          />
        </section>
      </div>
    </div>
  );
};

export default DashboardContent;
