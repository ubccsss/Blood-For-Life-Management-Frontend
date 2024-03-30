
import dayjs from 'dayjs'
import Image from 'next/image'
import FormDialog from './dashboard'
import EventCalendar from '../../components/EventCalendar'

export default function Home() {
  const day = dayjs("09:00:00", "HH:mm:ss");
  return (
    <div style={{background: "blue"}}>
    <FormDialog></FormDialog>
    </div>

  )
}
