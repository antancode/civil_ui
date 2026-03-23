import styles from './projects.module.scss';
import Link from 'next/link';

export default function Projects() {
    const equipmentData = [
        { id: 81934, type: 'Bulldozer', startDate: 'Oct 7, 2020', model: '315SL', icon: '🚜' },
        { id: 32819, type: 'Dump Truck', startDate: 'Oct 28, 2020', model: 'T800', icon: '🚛' },
        { id: 49203, type: 'Forklift', startDate: 'Nov 7, 2020', model: 'S155XL', icon: '🚧' },
        { id: 33281, type: 'Loader', startDate: 'Nov 23, 2020', model: '94821', icon: '🚜' },
        { id: 11283, type: 'Bulldozer', startDate: 'Nov 23, 2020', model: 'D11T', icon: '🚜' },
    ];
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.cardList}>
        {equipmentData.map(({ id, type, startDate, model, icon }) => (
          <Link key={id} href={`/equipment/${id}`} className={styles.card}>
            <div className={styles.info}>
              <div className={styles.title}>
                <strong>{type} {id}</strong>
              </div>
              <div className={styles.maintenance}>
                Started on: <span>{startDate}</span>
              </div>
            </div>
            <div className={styles.model}>
              Model {model}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}