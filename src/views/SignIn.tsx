/**
 * @desc 登录
 * @author feihan
 * @date 2022/3/2 21:01
 */
import * as React from "react";
import { MainButton } from "../components/button/MainButton";
import { Header, Logo, Main, Wrapper } from "./SignInStyled";
import { Form, FormRow } from "../components/Form";
import Input from "../components/Input";
import { useState } from "react";
import InputError from "../components/InputError";
import { Space } from "components/Space";
import { Center } from "components/Center";
import { useSendCodeButton } from "../hooks/useSendCodeButton";
import { validate } from "../lib/validate";
import { history, pathnameBeforeSignIn } from "../lib/history";

interface SignInProps {

}

const SignIn: React.FC<SignInProps> = (props) => {
    const [ formData, setFormData ] = useState({ tel: "", code: "" });
    type Errors = ErrorsFor<typeof formData>
    const [ errors, setErrors ] = useState<Errors>(null);
    const { setCodeSent, sendCodeButton } = useSendCodeButton(async () => {
        const errors = await validate({ tel: formData.tel }, {
            tel: [ { required: true }, { format: "china phone" } ]
        });
        setErrors(errors);
        if (!errors) {
            // Todo 发起获取验证码请求
            setCodeSent(true);
        }
    });
    const onSubmit: React.FormEventHandler = async (e) => {
        e.preventDefault();
        const errors = await validate(formData, {
            tel: [ { required: true }, { format: "china phone" } ],
            code: [ { required: true } ]
        });
        setErrors(errors);
        if (errors) {return; }
        // Todo 发起登录请求
        history.push(pathnameBeforeSignIn.value || "/");
        pathnameBeforeSignIn.value = "";
    };

    return <Wrapper>
        <Header>
            <Logo name="westore"/>
            <h1>每日一记</h1>
        </Header>
        <Main>
            <Form onSubmit={onSubmit}>
                <FormRow>
                    <Input type="text" placeholder="手机号码"
                           value={formData.tel}
                           onChange={(e) => {
                               setFormData({
                                   ...formData,
                                   tel: (e.target as HTMLInputElement).value
                               });
                           }}/>
                </FormRow>
                <FormRow>
                    <InputError value={errors?.tel?.[0]}/>
                </FormRow>
                <FormRow>
                    <Input type="text" placeholder="验证码"
                           value={formData.code}
                           onChange={(e) => {
                               setFormData({
                                   ...formData,
                                   code: (e.target as HTMLInputElement).value
                               });
                           }}/>
                    {sendCodeButton}
                </FormRow>
                <FormRow>
                    <InputError value={errors?.code?.[0]}/>
                </FormRow>
                <Space/>
                <Space/>
                <Center>
                    <MainButton type="submit">登录</MainButton>
                </Center>
            </Form>
        </Main>
    </Wrapper>;
};
SignIn.defaultProps = {};
export default SignIn;