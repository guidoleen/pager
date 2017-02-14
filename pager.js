// Guido Leen //

// Pager function
var nPages = 3; // Set number of pages based on the ammount of pages
function pager_pos(iC, iPage)
{
    var pagr = $("#pager");
    var pW = pagr.width();
    var pH = pagr.height();
    var percW = (pW / (iC - 1));

    pagr.attr('page', iPage);

    var iRad = 12;
    var iElPos = 0;
    var strPagr = "";

    var pW = 0;
    var eP = 0;
    for (i = 0; i < iC; i++)
    {
        iElPos = percW * i;
        if (i == 0) // First one
        {
            eP = iElPos + 30;
            pW = percW - 50;
        }
        else
        {
            eP = iElPos + 20;
            pW = percW - 40;
            iRad = 0;
        }

        if (iC != i + 1) // Not the Last One
        {
            if(i == (iC-2)) // Set the rectangle
            {
                strPagr += make_rectangl(pW - 10, eP);
            }
            else
            {
                strPagr += make_rectangl(pW, eP);
            }

            if (pagr.attr('page') == i) // Set the circle
            {
                strPagr += make_ellipse(1, iElPos + iRad, i);
            }
            else {
                strPagr += make_ellipse(0, iElPos + iRad, i);
            }
        }
        else // Last one
        {
            if (pagr.attr('page') == i) {
                strPagr += make_ellipse(1, iElPos - 12, i);
            }
            else {
                strPagr += make_ellipse(0, iElPos - 12, i);
            }
        }
    }
    pagr.html(strPagr);
}
// Make ellipse
function make_ellipse(YN, xPos, _id)
{
    if (YN == 1) return "<ellipse id='" + _id + "' stroke-width='2' stroke='#0094ff' fill='#fff' cx='" + xPos + "' cy='12' rx='10' ry='10' onclick='pager_click(this)'></ellipse>";
    if (YN == 0) return "<ellipse id='" + _id + "' fill='#88d1fa' cx='" + xPos + "' cy='12' rx='10' ry='10' onclick='pager_click(this)'></ellipse>";
}
// Make rectangle
function make_rectangl(W, xPos)
{
    return "<rect fill='#88d1fa' height='2' width='" + W + "' x='" + xPos + "' y='11'></rect>";
}
// Pager Click Event
function pager_click(obj)
{
    var objPagr = $(obj).attr('id');

    // Click and reload new pager based on page no.
    pager_pos(nPages, objPagr);

    // Xtra EventHandlers come here:
}
// Create the pageer based on ammount pages the first time
pager_pos(nPages, 0);