function greet() {
    let name = document.getElementById('nameInput').value;
    let lastName = document.getElementById('lastNameInput').value;
    window.location.href = `newPage.html?name=${name} ${lastName}`;

}
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const lastName = urlParams.get('lastName');
    
    document.getElementById('returnName').textContent = `${name}`;
    document.getElementById('returnLastName').textContent = `${lastName}`;
  }
speedCamera()
function speedCamera() {
    const speedLimit = 70;
    document.getElementById('returnLimit').textContent =`${speedLimit} km/h Speed limit`;

    const kmPerPoint = 5;
    let kmph = Math.random() *90;
    kmph = Math.floor(kmph) + 50;
    document.getElementById(`kmph`).textContent = `${kmph} km/h`;

    if(kmph <= speedLimit + kmPerPoint)
    document.getElementById(`noPoints`).textContent = `No points`

    else {
        const points = Math.floor ((kmph - speedLimit) / kmPerPoint);
        if (points >= 12)
        document.getElementById('suspended').textContent  =` ${points} Points license suspended`;
        else
        document.getElementById('points').textContent  =`${points} Points`;

    }
}
