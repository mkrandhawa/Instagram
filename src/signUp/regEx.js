export const regEx=[
    {
        name:'password',
        reg:/^(?=.*[A-Za-z])(?=.*\d).+$/
    },
    {
        name: 'email',
        reg: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    {
        name: 'phone',
        reg:/^\+?[0-9]\d{1,14}$/
    }

] 
