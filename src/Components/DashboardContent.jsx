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
  { name: 'Initiated', value: 30 },
  { name: 'Pending', value: 20 },
  { name: 'Spined', value: 40 },
  { name: 'Expired', value: 10 },
];

const eSignData = [
  { name: 'Initiated', value: 25 },
  { name: 'Pending', value: 15 },
  { name: 'Signed', value: 35 },
  { name: 'Expired', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
            <PieChart>
              <Pie
                data={eStampData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {eStampData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </section>
      </div>

      <div className="box">
        <section className="e-sign-graph">
          <h3>E-Sign Count</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={eSignData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#82ca9d"
                dataKey="value"
              >
                {eSignData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
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