"use client";

import React from "react";
import * as dateFns from "date-fns";

interface Event {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  volunteers: number;
  description: string;
}

class EventCalendar extends React.Component {
  // sample events:

  events: Event[] = [
    {
      id: 1,
      name: 'Krispy Kreme Fundraiser',
      startDate: new Date(2024, 2, 27, 5, 0),
      endDate: new Date(2024, 2, 27, 6, 0),
      volunteers: 5,
      description: 'Krsipy Kreme fundraiser at the nest outside of room 4021.\n'
    },    
    {
      id: 2,
      name: 'Boothing',
      startDate: new Date(2024, 2, 21, 5, 0),
      endDate: new Date(2024, 2, 21, 6, 0),
      volunteers: 5,
      description: 'Club boothing at the nest.\n'
    },
    {
      id: 3,
      name: 'Blood collection',
      startDate: new Date(2024, 2, 10, 5, 0),
      endDate: new Date(2024, 2, 10, 6, 0),
      volunteers: 5,
      description: 'Club boothing at the nest.\n'
    },
    {
      id: 5,
      name: 'Meeting',
      startDate: new Date(2024, 2, 27, 5, 0),
      endDate: new Date(2024, 2, 27, 6, 0),
      volunteers: 5,
      description: 'General meeting.\n'
    }, 
  ];

  event_dict: { [key: string]: Event[] } = {};

  componentDidMount() {
    const today = new Date(); // Get the current date
    this.setState({ selectedDate: today });

    if (Object.keys(this.event_dict).length === 0) {
      this.events.forEach((e) => {
        const key = dateFns.format(e.startDate, "yyyy-MM-dd");
        if (this.event_dict[key]) {
          this.event_dict[key].push(e);
        } else {
          this.event_dict[key] = [e];
        }
      });
    }
  }

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
          <div className="control" onClick={this.prevMonth} key="prev">
            prev
          </div>
        </div>
        <div className="col col-center" key="month">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth} key="next">
          <div className="control">next</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    return (
      <div className="days row">
        {days.map((day) => (
          <div className="col col-center" key={day}>
            {day}
          </div>
        ))}
      </div>
    );
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
        const eventsForDay = this.event_dict[dateFns.format(day, "yyyy-MM-dd")];
        days.push(
          <div
            key={cloneDay}
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            onClick={() => this.onDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            {Array.isArray(eventsForDay) && 
              eventsForDay.map((e: Event) => (
                <div key={e.id} className="event">
                  <p>{e.name}</p>
                </div>
              ))}
          </div>
        );
        //console.log(eventsForDay);
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
    console.log(this.event_dict);
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