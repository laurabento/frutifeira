import { shallowMount } from "@vue/test-utils";
import SignUp from "@/components/SignUp.vue";
import CreateMarketer from "@/components/CreateMarketer.vue";
import LoginAdm from "@/components/LoginAdm.vue";
import { Multiselect } from 'vue-multiselect';
jest.mock('axios')

describe("Sign Up Component", () => {
    const wrapper = shallowMount(SignUp)

    it('has save user button', async() => {
        expect(wrapper.find('#saveUserButton').exists()).toBe(true)
    })

    it('user form is calling axios function', async() => {
        const formUserSave = wrapper.find('#formUserSave');
        const spy = spyOn(wrapper.vm, 'saveUser')
        formUserSave.trigger('submit.prevent')
        expect(spy).toBeCalled()
    })

    it('submit the user form', async() => {
        const user = {
            name: 'Test',
            surname: '2',
            email: 'test@gmail.com',
            phone: '1199999999',
            cpf: '98745612399',
        }

        await wrapper.find('input[name=name]').setValue(user.name);
        await wrapper.find('input[name=surname]').setValue(user.surname);
        await wrapper.find('input[name=email]').setValue(user.email);
        await wrapper.find('input[name=phone]').setValue(user.phone);
        await wrapper.find('input[name=cpf]').setValue(user.cpf);
    })

    it('check if password is Equal', async() => {
        const password = {
            first: 'Teste123',
            second: 'Teste123'
        }

        await wrapper.find('input[name=firstPassword]').setValue(password.first);
        await wrapper.find('input[name=secondPassword]').setValue(password.second);
        wrapper.vm.hasPasswordEqual();
        expect(wrapper.vm.hasPasswordEqual()).toBe(password.first);
    })
});

describe("Create marketer Component", () => {
    const wrapper = shallowMount(CreateMarketer)

    it('has save marketer button', async() => {
        expect(wrapper.find('#saveMarketerButton').exists()).toBe(true)
    })

    it('user form is calling axios function', async() => {
        const formMarketerSave = wrapper.find('#formMarketerSave');
        const spy = spyOn(wrapper.vm, 'saveMarketer')
        formMarketerSave.trigger('submit.prevent')
        expect(spy).toBeCalled()
    })

    it('submit the user form', async() => {
        const marketer = {
            name: 'Test Feirante',
            standName: 'Barraca 2',
            email: 'feirante@gmail.com',
        }

        await wrapper.find('input[name=name]').setValue(marketer.name);
        await wrapper.find('input[name=standName]').setValue(marketer.standName);
        await wrapper.find('input[name=email]').setValue(marketer.email);
    })

    it('check if multiselect is working', async() => {
        const multiselect = wrapper.findComponent(Multiselect);
        await multiselect.trigger('focus');
        await multiselect.trigger('click');
    })

    it('check if password is Equal', async() => {
        const password = {
            first: 'Teste123',
            second: 'Teste123'
        }

        await wrapper.find('input[name=firstPassword]').setValue(password.first);
        await wrapper.find('input[name=secondPassword]').setValue(password.second);
        wrapper.vm.hasPasswordEqual();
        expect(wrapper.vm.hasPasswordEqual()).toBe(password.first);
    })
});

describe("Login Adm Component", () => {
    const wrapper = shallowMount(LoginAdm);

    it('check if after login has accessToken on localStorage', async() => {
        wrapper.vm.loginAdm();
        expect(window.localStorage.getItem('accessToken')).toBeDefined()
    })

    it('check if after login has userType on localStorage', async() => {
        wrapper.vm.loginAdm();
        expect(window.localStorage.getItem('userType')).toBeDefined()
    })
});