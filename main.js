const li=document.getElementById('contactNumber');
li.addEventListener('click',()=>{
  if(li.getAttribute('toggle')=='false'){
    li.innerHTML='<i class="fa-solid fa-phone"></i>Contact <br><br> 9999977777';
    li.setAttribute('Toggle','true');
  }
  else if(li.getAttribute('toggle')=='true'){
    li.innerHTML='<i class="fa-solid fa-phone"></i>Contact';
    li.setAttribute('toggle','false');

  }
})
document.getElementById('time').addEventListener('click', function () {
  const tableDiv = document.getElementById('table');
  tableDiv.innerHTML = `
    <table style="width:100%; color:white; text-align:center; border: 2px solid black; border-collapse:collapse;">
      <tr>
        <th style="border: 2px solid black; border-collapse:collapse;">Day</th>
        <th style="border: 2px solid black; border-collapse:collapse;">Timings</th>
      </tr>
      <tr>
        <td style="border: 2px solid black; border-collapse:collapse;">Monday-Friday</td>
        <td style="border: 2px solid black; border-collapse:collapse;">9:00 AM - 8:00 PM</td>
      </tr>
      <tr>
        <td style="border: 2px solid black; border-collapse:collapse;">Saturday</td>
        <td style="border: 2px solid black; border-collapse:collapse;">10:00 AM - 6:00 PM</td>
      </tr>
      <tr>
        <td style="border: 2px solid black; border-collapse:collapse;">Sunday</td>
        <td style="border: 2px solid black; border-collapse:collapse;">
          Closed
          <button type="button" id="arrow" style="background-color:rgba(255, 255, 255, 0); width:35px; cursor:pointer;">
            <i class="fa-solid fa-angle-up" style="color:black"></i>
          </button>
        </td>
      </tr>
    </table>`;
  
  const arrow = document.getElementById('arrow');
  arrow.addEventListener('click', () => {
    tableDiv.innerHTML = ''; 
  });

});
