import React from 'react';
import { t } from 'i18next';

export const About: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto p-8 bg-background text-foreground leading-relaxed font-sans">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold">{t('Noyco Automate')}</h1>
        <p className="text-xl  mt-2">
          {t('Revolutionize Your Workflow')}
        </p>
      </header>
      <article>
        <p className="mb-4">
          {t(
            'Noyco Automate is a cutting-edge automation software designed to transform the way you manage workflows and integrate digital tools. Our platform empowers businesses and professionals to streamline processes, reduce manual tasks, and boost overall productivity through powerful workflow automation and seamless integrations.'
          )}
        </p>
        <h2 className="text-2xl font-semibold mt-8 border-b pb-2 border-border">
          {t('Key Features That Set Us Apart')}
        </h2>
        <ul className="list-none mt-4 space-y-4">
          <li className="pl-6 relative">
            <span className="absolute left-0 text-light-blue font-bold">•</span>
            <strong>{t('Robust Integrations:')}</strong>{' '}
            {t('Connect effortlessly with your favorite apps and services, ensuring a smooth data flow across platforms.')}
          </li>
          <li className="pl-6 relative">
            <span className="absolute left-0 text-light-blue font-bold">•</span>
            <strong>{t('Customizable Automation:')}</strong>{' '}
            {t('Create tailored workflows with trigger-based actions that reduce repetitive tasks and improve operational efficiency.')}
          </li>
          <li className="pl-6 relative">
            <span className="absolute left-0 text-light-blue font-bold">•</span>
            <strong>{t('Scalable Solutions:')}</strong>{' '}
            {t('Grow your automation capabilities as your business expands, without sacrificing performance or control.')}
          </li>
          <li className="pl-6 relative">
            <span className="absolute left-0 text-light-blue font-bold">•</span>
            <strong>{t('Intuitive User Interface:')}</strong>{' '}
            {t('Enjoy a clean, easy-to-navigate design that simplifies complex automation tasks.')}
          </li>
        </ul>
        <p className="mt-4">
          {t(
            "Noyco Automate is more than just an automation tool—it's your partner in digital transformation. By automating routine tasks and streamlining operations, our platform allows you to focus on strategic initiatives, drive innovation, and stay ahead of the competition in today's fast-paced business landscape."
          )}
        </p>
        <p className="mt-4">
          {t(
            "Discover how Noyco Automate can help you unlock new levels of efficiency and productivity. Embrace the future of workflow automation and digital integration with a platform that's built for modern businesses."
          )}
        </p>
      </article>
    </section>
  );
};

export default About;
