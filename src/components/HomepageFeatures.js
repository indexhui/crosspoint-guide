import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '教練專業講解',
    Svg: require('../../static/img/ai_course.svg').default,
    description: (
      <>
        檢測後，視覺化和更直觀的身體報告，可以讓教練更容易找出會員的問題點，發揮車更適切的導課效果
      </>
    ),
  },
  {
    title: '掌握消費者心理',
    Svg: require('../../static/img/ai_course.svg').default,
    description: (
      <>
        檢測後，視覺化和更直觀的身體報告，可以讓教練更容易找出會員的問題點，發揮車更適切的導課效果
      </>
    ),
  },
  {
    title: '提高教練課轉換率',
    Svg: require('../../static/img/ai_course.svg').default,
    description: (
      <>
        檢測後，視覺化和更直觀的身體報告，可以讓教練更容易找出會員的問題點，發揮車更適切的導課效果
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
