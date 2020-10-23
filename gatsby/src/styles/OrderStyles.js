import styled from 'styled-components';

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    overflow-x: hidden;
    label {
      display: grid;
      gap: 1rem;
      align-content: start;
    }
    label + label {
      margin-top: 1rem;
    }
    &.order,
    &.menu {
      grid-column: span 1;
      /* Chrome is weird about Grid and fieldsets, so we add a fixed height to fix it :)  */
      height: 600px;
    }
    .submit {
      margin-top: 1rem;
      width: 100%;
    }
  }
  .magicRing {
    display: none;
  }
  @media (max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }
`;
export default OrderStyles;
