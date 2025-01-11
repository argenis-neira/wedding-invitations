import { useEffect } from "react";

const Timer = () => {
  const getTimeRemaining = (endtime) => {
    var t = Date.parse(endtime) - Date.parse(new Date());
    return {
      Total: t,
      Days: Math.floor(t / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((t / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((t / 1000 / 60) % 60),
      Seconds: Math.floor((t / 1000) % 60),
    };
  };

  //timer
  useEffect(() => {
    function CountdownTracker(label, value) {
      var el = document.getElementById(label);

      this.el = el;

      var top = el.querySelector(".card__top"),
        bottom = el.querySelector(".card__bottom"),
        back = el.querySelector(".card__back"),
        backBottom = el.querySelector(".card__back .card__bottom");

      this.update = function (val) {
        val = val >= 100 ? val : ("0" + val).slice(-2);
        if (val !== this.currentValue) {
          if (this.currentValue >= 0) {
            back.setAttribute("data-value", this.currentValue);
            bottom.setAttribute("data-value", this.currentValue);
          }
          this.currentValue = val;
          top.innerText = this.currentValue;
          backBottom.setAttribute("data-value", this.currentValue);

          this.el.classList.remove("flip");
          void this.el.offsetWidth;
          this.el.classList.add("flip");
        }
      };

      this.update(value);
    }

    function Clock(countdown) {
      this.el = document.getElementById("flip-flop-clock");

      var trackers = {},
        t = getTimeRemaining(countdown),
        key,
        timeinterval;

      for (key in t) {
        if (key === "Total") {
          continue;
        }
        trackers[key] = new CountdownTracker(key, t[key]);
      }

      var i = 0;
      function updateClock() {
        timeinterval = requestAnimationFrame(updateClock);

        // throttle so it's not constantly updating the time.
        if (i++ % 10) {
          return;
        }

        var t = getTimeRemaining(countdown);
        if (t.Total < 0) {
          cancelAnimationFrame(timeinterval);
          for (key in trackers) {
            trackers[key].update(0);
          }
          return;
        }

        for (key in trackers) {
          trackers[key].update(t[key]);
        }
      }

      setTimeout(updateClock, 500);
    }

    // var deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);
    let deadline = new Date("2025-10-26T15:00:00");
    new Clock(deadline);
  }, []);

  return (
    <>
      <div id="flip-flop-clock" className="flip-clock">
        <span id="Days" className="flip-clock__piece flip">
          <b className="flip-clock__card card">
            <b className="card__top"></b>
            <b className="card__bottom"></b>
            <b className="card__back">
              <b className="card__bottom" data-value=""></b>
            </b>
          </b>
          <span className="flip-clock__slot start-slot">Días</span>
        </span>
        <span id="Hours" className="flip-clock__piece flip">
          <b className="flip-clock__card card">
            <b className="card__top"></b>
            <b className="card__bottom"></b>
            <b className="card__back">
              <b className="card__bottom" data-value=""></b>
            </b>
          </b>
          <span className="flip-clock__slot">Horas</span>
        </span>
        <span id="Minutes" className="flip-clock__piece flip">
          <b className="flip-clock__card card">
            <b className="card__top"></b>
            <b className="card__bottom" data-value=""></b>
            <b className="card__back" data-value="">
              <b className="card__bottom" data-value=""></b>
            </b>
          </b>
          <span className="flip-clock__slot">Minutos</span>
        </span>
        <span id="Seconds" className="flip-clock__piece flip">
          <b className="flip-clock__card card">
            <b className="card__top"></b>
            <b className="card__bottom" data-value=""></b>
            <b className="card__back" data-value="">
              <b className="card__bottom" data-value=""></b>
            </b>
          </b>
          <span className="flip-clock__slot end-slot">Segundos</span>
        </span>
      </div>
    </>
  );
};

export default Timer;
