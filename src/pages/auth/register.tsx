import {
  Button,
  Divider,
  Form,
  Input,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Row,
  Select,
  message,
  notification,
} from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { callRegister } from 'config/api';
import styles from 'styles/auth.module.scss';
import { IUser } from '@/types/backend';
const { Option } = Select;

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const onFinish = async (values: IUser) => {
    const { name, email, password, age, gender, address } = values;
    setIsSubmit(true);
    const res = await callRegister(
      name,
      email,
      password as string,
      +age,
      gender,
      address
    );
    setIsSubmit(false);
    if (res?.data?._id) {
      message.success('Đăng ký tài khoản thành công!');
      navigate('/login');
    } else {
      notification.error({
        message: 'Có lỗi xảy ra',
        description:
          res.message && Array.isArray(res.message)
            ? res.message[0]
            : res.message,
        duration: 5,
      });
    }
  };

  return (
    <div className={styles['register-page']}>
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.wrapper}>
            <div className={styles.heading}>
              <h2 className={`${styles.text} ${styles['text-large']}`}>
                {' '}
                Đăng Ký Tài Khoản{' '}
              </h2>
              <Divider />
            </div>
            <Form<IUser> name="basic" onFinish={onFinish} autoComplete="off">
              <Form.Item
                labelCol={{ span: 24 }}
                label="Họ tên"
                name="name"
                rules={[
                  { required: true, message: 'Họ tên không được để trống!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Email không được để trống!' },
                ]}
              >
                <Input type="email" />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                label="Mật khẩu"
                name="password"
                rules={[
                  { required: true, message: 'Mật khẩu không được để trống!' },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Tuổi"
                name="age"
                rules={[
                  { required: true, message: 'Tuổi không được để trống!' },
                ]}
              >
                <Input type="number" />
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }}
                name="gender"
                label="Giới tính"
                rules={[
                  { required: true, message: 'Giới tính không được để trống!' },
                ]}
              >
                <Select allowClear>
                  <Option value="male">Nam</Option>
                  <Option value="female">Nữ</Option>
                  <Option value="other">Khác</Option>
                </Select>
              </Form.Item>

              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label="Địa chỉ"
                name="address"
                rules={[
                  { required: true, message: 'Địa chỉ không được để trống!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={isSubmit}>
                  Đăng ký
                </Button>
              </Form.Item>
              <Divider> Or </Divider>
              <p className="text text-normal">
                {' '}
                Đã có tài khoản ?
                <span>
                  <Link to="/login"> Đăng Nhập </Link>
                </span>
              </p>
            </Form>
          </section>
        </div>
      </main>
    </div>
  );
};
