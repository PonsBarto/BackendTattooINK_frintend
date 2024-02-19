import "./CardAppointments.css"
export const CardAppointment = ({ date, hour, artistName }) => {
  return (
    <div className="CardAppointment">
      <h3>{artistName}</h3>
      <p>{date}</p>
      <p>{hour}</p>

    </div>
  );
};