var a = "";
var b = "";
var operator;
var resState = false;
var opClicked = true;

function rel() {
  if (b != "") {
    test = eval(`(${a})${operator}(${b})`);
    a = test;
    b = "";
    $("#input").val(test);
    console.log(a);
  } else {
    a = a;
    b = "";
    $("#input").val(a);
    console.log(a);
  }
}
$(document).ready(function () {
  console.clear();
  $(".btn")
    .not(".operator", ".clr", ".all-clr")
    .click(function () {
      if (operator == undefined) {
        if (resState) {
          a = "";
          $("#abcd").val(" ");
          resState = false;
        }
        a += this.innerHTML.replace(/\n|\s/g, "");
        var a1 = a.substr(0, 10);
        a = a1;
        $("#input").val(a);
      } else {
        b += this.innerHTML.replace(/\n|\s/g, "");
        var b1 = b.substr(0, 10);
        b = b1;
        $("#input").val(b);
      }
      console.log(`${a} -- ${operator} -- ${b}`);
    });

  $(".plusm").click(function () {
    if (operator == undefined) {
      a = -1 * Number(a) + "";
      console.log(a);
      $("#input").val(a);
    } else {
      b = -1 * Number(b) + "";
      console.log(b);
      $("#input").val(b);
    }
  });

  $(".operator").click(function () {
    let val = this.dataset.value;
    if (operator) {
      rel();
      $("#input").val(test);
    }
    operator = val;
    if (a == "") {
      operator = undefined;
    }
    $("#abcd").val(this.innerHTML.replace(/ /g, ""));
    console.log(operator);
  });

  $(".clr").click(function () {
    if (operator == undefined) {
      a = "";
    } else {
      b = "";
    }
    $("#input").val("0");
  });

  $(".all-clr").click(function () {
    a = "";
    b = "";
    operator = undefined;
    console.log(`${a} -- ${operator} -- ${b}`);
    $("#input").val("0");
    $("#abcd").val("");
  });

  $(".enter").click(function () {
    let res = !operator
      ? eval(a)
      : eval(`(${parseFloat(a)})${operator}(${parseFloat(b)})`);
    if (res > 9999999999) {
      $("#abcd").val("E");
      res = 0;
      a = "";
      b = "";
      operator = undefined;
      $("input").val(res);
    }
    $("#input").val(res.toPrecision(8) * 1);
    a = res.toPrecision(8) * 1;
    operator = undefined;
    b = "";
    resState = true;
    $("#abcd").val(res > 999999999 ? "E" : this.innerHTML.replace(/ /g, ""));
  });
});
