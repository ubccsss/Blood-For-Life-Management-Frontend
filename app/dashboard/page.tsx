import FormDialog from './dashboard'
import EventCalendar from '../../components/EventCalendar'
import '../styles/calendar.css'

export default function Home() {
  return (
    <main>
    <FormDialog></FormDialog>
    <EventCalendar />
    </main>

  )
}
