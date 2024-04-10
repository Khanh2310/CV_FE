import { SearchClient } from '@/components/client';
import { JobCard } from '@/components/client/card';
import { Col, Divider, Row } from 'antd';
import styles from 'styles/client.module.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ClientJobPage = (props: any) => {
  return (
    <div className={styles['container']} style={{ marginTop: 20 }}>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <SearchClient />
        </Col>
        <Divider />

        <Col span={24}>
          <JobCard showPagination={true} />
        </Col>
      </Row>
    </div>
  );
};
