import React from 'react'

import { Col, Row, Paper } from '../../../components'

export default {
  title: 'ui-components/Paper',
  component: Paper,
  decorators: [
    (story) => (
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='7' hd='6'>
          {story()}
        </Col>
      </Row>
    )
  ]
}

const Template = (args) => (
  <Paper {...args}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta minima neque saepe architecto cupiditate impedit mollitia nesciunt
      similique accusantium tempora id enim, placeat omnis in, facere sit quasi quisquam doloremque nisi officiis tempore porro temporibus
      voluptatibus? Minus delectus pariatur porro officia deserunt, voluptatum totam impedit? Rem recusandae sed ad? Molestias, distinctio
      explicabo. Tenetur quis facere recusandae excepturi reiciendis soluta, odio nobis itaque fugit adipisci ut officia corporis eligendi harum.
      Minima in quasi doloribus reiciendis alias, beatae molestiae omnis dolores impedit expedita magnam cupiditate quas velit, cum animi quos
      consequuntur commodi saepe nemo inventore perferendis tempore! Enim libero officiis dolore culpa amet magni dicta tempore, laboriosam placeat
      ipsum praesentium ex excepturi esse natus animi aliquam explicabo, voluptate iusto sunt eum rem! Provident aut at dolor, ut porro, earum sed
      nisi minus exercitationem error voluptatibus similique esse nesciunt quam fugiat dolores voluptatum tempora, assumenda hic. Quis, doloribus
      ut. Sapiente illo ad consequuntur velit amet consectetur, cupiditate blanditiis, debitis porro explicabo, eveniet sit non doloremque esse eum
      facere rerum enim nisi! Est molestiae alias sapiente consequatur magni perferendis fugit esse dolores! Cupiditate commodi ut repellat porro
      quo quisquam aliquam aperiam amet. Nisi eaque libero, voluptas earum, blanditiis assumenda ipsum inventore vero modi officiis, perferendis
      dolores molestias amet repellat consequatur sed ea quaerat sunt? Aperiam animi unde earum, natus aliquam fuga dolorem nihil, magni, nulla
      autem minima ullam. Deleniti repellendus accusamus fugiat delectus sequi rem quas accusantium dignissimos nobis perspiciatis iure eos, quis
      doloribus placeat labore provident ipsa consequuntur quam aliquam odit neque voluptas! Suscipit laudantium et voluptates earum minus velit
      reiciendis optio mollitia animi sint modi magni tempora amet, odio accusantium at quas impedit facere veniam alias. Iste sed mollitia omnis
      repellat adipisci cum non rem dolor illum. Beatae architecto ipsam consectetur, alias eius quo eum possimus harum voluptas, fugiat quis
      magnam!
    </p>
  </Paper>
)

export const Default = Template.bind({})

Default.storyName = 'default'

export const OtherColor = Template.bind({})

OtherColor.storyName = 'with other color'
OtherColor.args = {
  color: 'var(--clr-primary-400)'
}
