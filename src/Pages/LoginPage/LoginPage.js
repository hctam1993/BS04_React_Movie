import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { userServ } from "../../services/userService";
import { localService } from "../../services/localService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../redux/constants/constantUser";
import Lottie from "lottie-react";
import bg_movie_loading from "../../assets/bg-movie-loading.json";

export default function LoginPage() {
  let navigate = useNavigate();

  let dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    userServ
      .postLogin(values)
      .then((res) => {
        // console.log(res);
        localService.user.set(res.data.content); // luu vao localStorge

        //dispatch to state
        dispatch({
          type: SET_USER,
          payload: res.data.content,
        });
        //thong bao dang nhap thnah cong
        message.success("Dang nhap thanh cong");
        setTimeout(() => {
          //chuyen huong toi trang chu
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        message("Dang nhap that bai");
        // console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container mx-auto h-screen w-screen flex items-center justify-center">
      <div className="w-1/2 h-full">
        <div className="scale-50">
          {" "}
          <Lottie animationData={bg_movie_loading} />
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <Form
          className="bg-blue-100 w-full"
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Vui long nhap tai khoan!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Vui long nhap mat khau!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
