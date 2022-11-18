import React from 'react'

import { Col, Row, Image, Content } from '../../../components'

export default {
  title: 'ui-components/Content',
  component: Content
}

export const Default = () => (
  <Content>
    <Col xs='11'>
      <Row display='flex' justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='4' hd='3'>
          <Image
            url='https://images.pexels.com/photos/1545346/pexels-photo-1545346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Autumn season.'
            title='Photography 1.'
          />
        </Col>

        <Col xs='11' mm='10' md='9' lg='5' hd='4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro provident animi veniam ducimus quisquam, alias facilis eos iusto
            architecto ea recusandae ex exercitationem laboriosam corrupti facere. Obcaecati fugit aspernatur fuga ad, perferendis, repudiandae
            aut quibusdam pariatur explicabo qui fugiat nobis? Eos cum enim aliquam dignissimos nam facilis rem consequuntur, nulla molestiae
            dicta excepturi architecto reiciendis blanditiis nobis id incidunt fugit voluptatem consequatur veniam quisquam libero, fugiat
            voluptate animi quis.
          </p>

          <p className='u-my-4'>
            Dicta asperiores rerum velit! Dolores maxime est adipisci eum esse quas in cumque, commodi debitis amet magni, earum quod rem
            dignissimos quis? Ipsam similique excepturi cupiditate quidem saepe aliquam quam. Dolor illum cupiditate expedita! Aspernatur
            distinctio at fugiat recusandae placeat alias sunt culpa optio nemo autem quasi ex repellendus qui eius quaerat minima, animi quidem
            libero voluptatem magnam quos quibusdam. Laudantium doloremque sed voluptatum at. Numquam, ipsam ipsa perferendis odio hic nam
            laborum, quaerat similique pariatur doloribus nisi sequi eos reiciendis aliquid porro sapiente omnis reprehenderit maxime enim quo
            est.
          </p>
        </Col>
      </Row>
    </Col>
  </Content>
)

Default.storyName = 'default'
