function copyMatchingRows() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var summarySheet = ss.getSheetByName("Summary report");
    var gitLogSheet = ss.getSheetByName("Git log");
    var resultSheet = ss.getSheetByName("result");

    var summaryData = summarySheet.getDataRange().getValues();
    var gitLogData = gitLogSheet.getDataRange().getValues();

    // Copy header from "Git log" to "result"
    resultSheet.appendRow(gitLogData[0]);

    // Start from row 2 to skip the header
    for (var i = 1; i < summaryData.length; i++) {
        var summaryDate = new Date(summaryData[i][1]).toLocaleDateString()

        for (var j = 1; j < gitLogData.length; j++) {
            var gitlogDate = new Date(gitLogData[j][2]).toLocaleDateString()
            // console.log(summaryDate)
            // console.log(gitlogDate)
            if (summaryDate === gitlogDate) {
                resultSheet.appendRow(gitLogData[j]);
            }
        }
    }
}
