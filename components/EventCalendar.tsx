"use client";

import React from "react";
import * as dateFns from "date-fns";

class EventCalendar extends React.Component {
  // sample events:

  events = [
    {
      id: 1,
      name: 'Fundraiswer',
      startDate: new Date(),
      endDate: new Date(),
      volunteers: 5,
      description: 'Krsipy Kreme fundraiser at the nest outside of room 4021.\n'
    },
  ];

  state = {
    currentYear: new Date(),
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  // in progress while i get more details
  renderToggle() {

    return (
      <div className="toggle row flex-middle">
        <div className="col col-center" onClick={this.changeMonth}>

        </div>

        <div className="col col-center" onClick={this.changeYear}>

        </div>

      </div>
    )
  }
  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            prev
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">next</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const days = [];

    days.push(
    <div className="col col-center" key={0}>
       {"sunday"} 
    </div>);
    days.push(
        <div className="col col-center" key={1}>
           {"monday"} 
        </div>
        );
    days.push(
        <div className="col col-center" key={2}>
           {"tuesday"} 
        </div>);
    days.push(
        <div className="col col-center" key={3}>
           {"wednesday"} 
        </div>);
    days.push(
        <div className="col col-center" key={4}>
           {"thrusday"} 
        </div>);
    days.push(
        <div className="col col-center" key={5}>
           {"friday"} 
        </div>);
    days.push(
        <div className="col col-center" key={6}>
           {"saturday"} 
        </div>);

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);// first date in curr month
    const monthEnd = dateFns.endOfMonth(monthStart);      // last date in curr month
    const startDate = dateFns.startOfWeek(monthStart);    // first date
    const endDate = dateFns.endOfWeek(monthEnd);          // last date

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            onClick={() => this.onDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <span className="event">{events}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row">
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = (day: Date) => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default EventCalendar;