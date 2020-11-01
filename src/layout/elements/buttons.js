import styled from 'styled-components'


export const BasicButton = styled.button`
border: none;
border: 1px solid rgb(224 223 223);
border-radius: 5px;
//margin: 5px;
background: #F8FAFC;
&:hover  {
background: #A9ABAD;
}
`
export const MenuButton = styled(BasicButton)`
min-width: 100px;
min-height: 30px;
margin: 10px;
`

export const NavLink = styled.link`
text-decoration: none;
`

export const ShowButton = styled(BasicButton)`
background: #95dc7e;
&:hover  {
background: #84cb6c;
}
`

export const AddButton = styled(ShowButton)`
width: 30px;
height: 30px;
border-radius: 50%;
`

export const DeleteButton = styled(BasicButton)`
background: #ec5555;
&:hover  {
background: #db4444;
}
`

export const EditButton = styled(BasicButton)`

`