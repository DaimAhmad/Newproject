import Accordion from 'react-bootstrap/Accordion';
import Footer from './footer';
import Navigation from './navbar';
function Faqs (){
    return(
        <>
        <Navigation />
        <div style={{display:"flex",textAlign:"center",flexDirection:"column"}}>
            <h1 id='2' style={{marginTop:"50px",}} >FrequentlyAskedQuestions</h1>
            <h3 style={{marginRight:"80%", marginTop:"10px"}}>Product Inquiries</h3>
        <Accordion defaultActiveKey="0" style={{marginTop:"10px", }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header> Hows is it that MysticScents.com's ability to carry unique and exclusive items that may not be found elsewhere could be attributed to several factors?</Accordion.Header>
          <Accordion.Body>
          Traditional retail stores are restricted in the variety of items they are able to stock, because they are catering to a specific demographic area. However, MysticScents.com has a much more efficient inventory model that makes it cost effective for us to carry a much wider variety of products targeting all kinds of niche customer demands 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Will MysticScents.com continue to carry the hard to find items in the future, i.e. can the customer be assured that they will be able to continue to purchase these items from MysticScents.com?</Accordion.Header>
          <Accordion.Body>
          MysticScents.com is committed to ensuring complete customer satisfaction, and will do its best to satisfy all of its customers' fragrance needs. If a customer is searching for a hard-to-find fragrance, we will do our best to locate that item and keep it in our inventory. You can be assured that MysticScents.com will always carry a wide selection of brand name fragrance products
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Does MysticScents.com sell imitation brands, old and or used products?</Accordion.Header>
          <Accordion.Body>
          MysticScents.com does not carry or sell any imitations, old, or used items. All of our products are the same quality you would expect to find at the leading department stores.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Does MysticScents.com expand the assortment of products offered at it's web site?</Accordion.Header>
          <Accordion.Body>
          Our product selection is frequently updated and expanded. Our product line is growing rapidly as we add more of the best designer fragrance brands
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Can MysticScents.com mail customer orders to a MysticScents retail store for pickup?</Accordion.Header>
          <Accordion.Body>
          No. MysticScents.com can only ship directly to the customer. One of the main reasons behind MysticScents.com's ability to offer deep discounts is our efficient business model. It is more cost effective to ship orders directly to you, your family members, or friends. We do not ship customer orders to MysticScents, Inc. stores for customer's pick-up
          </Accordion.Body>
        </Accordion.Item>
        <h3 style={{marginRight:"80%", marginTop:"20px", padding:"10px"}}>Shipping Inquiries</h3>

        <Accordion.Item eventKey="5">
          <Accordion.Header>How are the products delivered?</Accordion.Header>
          <Accordion.Body>
          We mostly use USPS to ship to the contiguous 48 United States, however this is subject to change without notice. We also offer expedited shipping via UPS 2nd Day and Next Day services to United States addresses.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>What are the shipping charges?See our shipping information page</Accordion.Header>
          <Accordion.Body>
          See our shipping information page
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Can I have my order delivered to a post office box?</Accordion.Header>
          <Accordion.Body>
          Yes
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Does MysticScents.com sell customer information or customer lists to other companies?</Accordion.Header>
          <Accordion.Body>
          No. All information submitted to MysticScents.com remains confidential. Customers can be assured that we do not sell any of the provided information to other enterprises, nor do we transfer information to other enterprises for marketing purposes.
          </Accordion.Body>
        </Accordion.Item>

         <h3 style={{marginRight:"80%"}}>Web Site Inquiries</h3>
         <Accordion.Item eventKey="9">
          <Accordion.Header>Does MysticScents.com deliver to international destinations?</Accordion.Header>
          <Accordion.Body>
          No. We currently do not deliver to international destinations
          </Accordion.Body>
        </Accordion.Item> 
        <Accordion.Item eventKey="10">
          <Accordion.Header>Is the web site secure?</Accordion.Header>
          <Accordion.Body>
          Ensuring secure online purchasing is a vital part of our commitment to honor your privacy. The MysticScents.com site utilizes SSL (Secure Socket Layer) to protect your personal information, including credit card numbers. SSL is used in order to encrypt all personal information, including your name and credit card information, so that it can't be read while being transferred from your web browser to our Internet site. All pages on the site that require our customers to enter sensitive information are protected with SSL. Other pages that do not require you entering personal information do not need to be protected
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header>Is it safer to place orders over the phone than on the Internet?</Accordion.Header>
          <Accordion.Body>
          Both means of ordering are secure. However, if you feel more comfortable placing your order with one of our customer service representatives, please do not hesitate to call customer service (+92)3366917472.
          </Accordion.Body>
        </Accordion.Item>
       
      </Accordion>
      <Footer/>
      </div>

        </>
    );
}
export default Faqs;