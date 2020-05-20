import React from 'react';
import './help.css';

function Help() {
  return (
    <>
      <div className="wrap-help">
        <div className="time">
          <div className="tip-pic-wrapper">
            <p className="picture-help one-two"></p>
            <p className="tip">Educate yourself </p>
          </div>
          <div className="more-content">
            Many media channels present valuable informations on the topic but
            some misinformation out there as well. We shouldn’t be concerned,
            but we should separate the hype from the facts and focus on
            preparation and prevention as a way of dealing with the outbreak.
            Maybe you can help your family or friends to understand the
            situation better. Here are some of the best sources we've came
            across :
            <br />
            <a
              className="help-link"
              target="_blank"
              href="https://multimedia.scmp.com/infographics/news/china/article/3075382/decoding-coronavirus-covid-19/index.html"
            >
              How Coronaviruses Work
            </a>
            <br />
            <a
              className="help-link"
              target="_blank"
              href="https://coronavirus.jhu.edu/map.html"
            >
              Real-time COVID-19 Map
            </a>
            <br />
            <a
              className="help-link"
              target="_blank"
              href="            https://www.visualcapitalist.com/history-of-pandemics-deadliest/
              "
            >
              The history of pandemic
            </a>
            <br />
            <a
              className="help-link"
              target="_blank"
              href="https://ourworldindata.org/grapher/covid-confirmed-cases-since-100th-case?country=RUS+GBR"
            >
              Which countries are “Flattening the Curve”
            </a>
            <br />
            <a
              className="help-link"
              target="_blank"
              href="            https://ourworldindata.org/grapher/total-covid-deaths-per-million
              "
            >
              COVID-19 Stats and Research
            </a>
          </div>
          <div className="tip-pic-wrapper">
            <p className="tip">Help your neighboors</p>
            <p className="picture-help one"></p>
          </div>
          <div className="more-content">
            The elderly and people with pre-existing condition are at higher
            risk of acquiring coronavirus and for having complications if they
            do become sick. Daily activities may be risky for more vulnerable
            neighbors. Volonteer to do groceries and run errands for them. Some
            convenience stores are quickly going through basic supplies. If you
            have extra flour, yeast or other necessities as hand sanitizer
            consider sharing them with your neighbors!
          </div>
        </div>
        <div className="money">
          <div className="tip-pic-wrapper">
            <p className="tip">Help the victims, donate</p>
            <p className="picture-help two"></p>
          </div>
          <div className="more-content">
            Many charities and organizations are helping those affected by the
            pandemic. One of the ways to support them is to donate money. <br />
            <span>
              <a
                target="_blank"
                className="help-link"
                href="https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=7779"
              >
                Here
              </a>{' '}
            </span>
            you can find a list of non profit organizations that focus on
            medical services, relief supplies and more. Or simply donate to{' '}
            <a
              target="_blank"
              className="help-link"
              href="https://www.globalgiving.org/projects/coronavirus-relief-fund/"
            >
              Global Coronavirus Relief Fund
            </a>
            <br />
            If you want to give toward medical supplies, check{' '}
            <a
              target="_blank"
              className="help-link"
              href="https://www.ri.org/donate/"
            >
              Relief International,
            </a>{' '}
            <a
              target="_blank"
              className="help-link"
              href=" https://give.internationalmedicalcorps.org/page/55806/donate/1?ea.tracking.id=DP~CNOV~DPHHZ2002"
            >
              International Medical Corps,
            </a>{' '}
            <a
              target="_blank"
              className="help-link"
              href="https://www.hearttoheart.org/"
            >
              Heart to Heart{' '}
            </a>
            is distributing urgently needed equipment and medication to its
            partners around the world. Medical supplies are also being delivered
            to providers on the front lines.
            <a
              target="_blank"
              className="help-link"
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"
            >
              COVID-19 Solidarity Response Fund
            </a>
            .
          </div>
          <div className="tip-pic-wrapper">
            <p className="picture-help two-two"></p>
            <p className="tip">Stay at home</p>
          </div>
          <div className="more-content">
            Big problem with coronavirus is that you can have it and not know
            about it. You can go about your day, feeling healthy and actually
            infect other people. Even to three people within a week. What
            happens next, those people go on to infect another two or three
            people each. If you decide to stay home, you prevent spreading the
            virus and contribute to taking off the pressure from medical system.
            Try limit going out as much as possible, only leave home to buy
            food, medicine and to exercise. It will make a difference.{' '}
          </div>
        </div>
      </div>
    </>
  );
}
export default Help;
