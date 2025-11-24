const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
}

function logAttendeeName(attendee) {
  console.log(attendee.name)
}

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice)
}

function updateTicketType(attendee, ticketType) {
  attendee.ticketType = ticketType
}

function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice
}

function removeEventProperty(attendee) {
  delete attendee.event;
  //console.log(attendee);

}

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true
  //console.log(attendee);
}

//logAttendeeName(attendee);
//logTicketPrice(attendee);
//removeEventProperty(attendee);
//updateTicketPrice(attendee, 200.00)
//updateTicketType(attendee, "General")
//addCheckedInProperty(attendee);
//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};