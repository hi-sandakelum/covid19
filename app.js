
// fetch("https://covid19.mathdro.id/api/countries").
// then(res => res.json()).
// then(data => console.log(data.countries));
const se = document.querySelector("#sel");
const c_name = document.querySelector("#c_name")
const tbody = document.querySelector("#tbody")
const chart = document.querySelector("#pychart")
const str = {
    t:"තහවුරු කළ",
    p:"ප්‍රතිකාර ලබන",
    s:"සුවය ලැබූ",
    m:"මරණ",
}
class App{
    // data = 
    
    getData(){
        // let alldata 
        fetch("https://covid19.mathdro.id/api/countries").
        then(res => res.json()).
        then(data => this.logData(data.countries));

        // console.log(alldata);
        // re
    }

    logData(data){
        // console.log(data);
        let countriList = "<option>--select country--</option>"
        data.forEach(countri => {
            // console.log(countri);
            countriList = countriList + "<option value = '"+countri.name+"' >"+countri.name+"</option>";
        });
        se.innerHTML = countriList;
        

    }

    getCountriStatus(c){
        let countriName = c.value
        // console.log(countriName);
        fetch("https://covid19.mathdro.id/api/countries/"+countriName).then(res => res.json()).
        then(data => this.getCountriStatusAll(countriName,data));

    }

    getCountriStatusAll(name,data){
        c_name.innerHTML = name
        tbody.innerHTML = "<tr><td>"+data.confirmed.value+"</td><td>"+data.recovered.value+"</td><td>"+data.deaths.value+"</td></tr>"
        let p = data.confirmed.value-(data.recovered.value+data.deaths.value)
        chart.src = "https://image-charts.com/chart?cht=pd&chd=t:"+p+","+data.recovered.value+","+data.deaths.value+"&chs=700x190&chdl="+str.p+"|"+str.s+"|"+str.m+"&chli="+data.confirmed.value

    }
}

let app =  new App()
app.getData();
