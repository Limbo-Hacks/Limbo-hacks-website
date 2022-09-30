import {Col, Row} from 'react-bootstrap';
import {FORM_SECTION} from '../../Module/General';

const baseUrl = process.env.NEXT_SERVER_URL;

const handleSubmit = e => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const data = {};
  for (let entry of formData.entries()) {
    data[entry[0]] = entry[1];
  }
  console.log(data);
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  };
  fetch(`${baseUrl}/api/form`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
};

function SectionForm() {
  return (
    <div className="formSection">
      <Row className="formRow">
        <Col lg={8} md={8} className="formImg hidden-sm hidden-xs">
          <div
            className="formImg"
            style={{backgroundImage: 'url(/Assets/hackathonBanner.jpeg)'}}
          />
        </Col>
        <Col sm={12} lg={4} md={4}>
          <div className="formTitle">
            <h2>{FORM_SECTION.TITLE}</h2>
          </div>
          <div className="formContainer center-block">
            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Nome"
                  name="name"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  type="text"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Whatsapp"
                  name="phone"
                  type="text"
                />
              </div>

              <div className="form-group formBtnContainer">
                <input className="btn formBtn" type="submit" value="Me avise" />
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export {SectionForm};
