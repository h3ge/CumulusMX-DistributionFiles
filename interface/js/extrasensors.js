$(document).ready(function () {
    $.ajax({url: "api/settings/version.json", dataType:"json", success: function (result) {
        $('#Version').text(result.Version);
        $('#Build').text(result.Build);
    }});

    var tempTable = $('#TempTable').DataTable({
        "paging": false,
        "searching": false,
        "info": false,
        "ordering": false,
        "ajax": '../api/extra/temp.json'
    });

    var humTable = $('#HumTable').DataTable({
        "paging": false,
        "searching": false,
        "info": false,
        "ordering": false,
        "ajax": '../api/extra/hum.json'
    });

    var dewTable = $('#DewTable').DataTable({
        "paging": false,
        "searching": false,
        "info": false,
        "ordering": false,
        "ajax": '../api/extra/dew.json'
    });

    var soiltempTable = $('#SoilTempTable').DataTable({
        "paging": false,
        "searching": false,
        "info": false,
        "ordering": false,
        "ajax": '../api/extra/soiltemp.json'
    });

    var soilmoistureTable = $('#SoilMoistureTable').DataTable({
        "paging": false,
        "searching": false,
        "info": false,
        "ordering": false,
        "ajax": '../api/extra/soilmoisture.json'
    });

    var leafTable = $('#LeafTable').DataTable({
        "paging": false,
        "searching": false,
        "info": false,
        "ordering": false,
        "ajax": '../api/extra/leaf.json'
    });

    var airqualTable = $('#AirQualityTable').DataTable({
        "paging": false,
        "searching": false,
        "info": false,
        "ordering": false,
        "ajax": '../api/extra/airqual.json'
    });

    var lightningTable = $('#LightningTable').DataTable({
        "paging": false,
        "searching": false,
        "info": false,
        "ordering": false,
        "ajax": '../api/extra/lightning.json'
    });

    var userTempTable = $('#UserTempTable').DataTable({
        "paging": false,
        "searching": false,
        "info": false,
        "ordering": false,
        "ajax": '../api/extra/usertemp.json'
    });

    setInterval(function () {
        tempTable.ajax.url('../api/extra/temp.json').load();
        humTable.ajax.url('../api/extra/hum.json').load();
        dewTable.ajax.url('../api/extra/dew.json').load();
        soiltempTable.ajax.url('../api/extra/soiltemp.json').load();
        soilmoistureTable.ajax.url('../api/extra/soilmoisture.json').load();
        leafTable.ajax.url('../api/extra/leaf.json').load();
        airqualTable.ajax.url('../api/extra/airqual.json').load();
        lightningTable.ajax.url('../api/extra/lightning.json').load();
        userTempTable.ajax.url('../api/extra/usertemp.json').load();
    }, 10000);

});


