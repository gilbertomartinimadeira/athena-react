import React from "react";

export default function Clientes () {
    return (
      <div className="clientes">
        <div class="row">
            <div class="col s12">
            <div class="row">
                <div class="input-field col s12">
                <i class="material-icons prefix">textsms</i>
                <input type="text" id="autocomplete-input" class="autocomplete"/>
                <label for="autocomplete-input">Nome ou CPF</label>
                </div>
            </div>
            </div>
        </div>
        <ul class="collection">
          <li class="collection-item avatar">
            <i  class="material-icons circle">face</i>
            <span class="title">João da Silva</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">send</i>
            </a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle">folder</i>
            <span class="title">José das Couves</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">send</i>
            </a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle green">insert_chart</i>
            <span class="title">Astrogildo Beltrano</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">send</i>
            </a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle red">play_arrow</i>
            <span class="title">Anna Maria</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">send</i>
            </a>
          </li>
        </ul>
        <ul class="pagination">
          <li class="disabled">
            <a href="#!">
              <i class="material-icons">chevron_left</i>
            </a>
          </li>
          <li class="active">
            <a href="#!">1</a>
          </li>
          <li class="waves-effect">
            <a href="#!">2</a>
          </li>
          <li class="waves-effect">
            <a href="#!">3</a>
          </li>
          <li class="waves-effect">
            <a href="#!">4</a>
          </li>
          <li class="waves-effect">
            <a href="#!">5</a>
          </li>
          <li class="waves-effect">
            <a href="#!">6</a>
          </li>        
          <li class="waves-effect">
            <a href="#!">7</a>
          </li>        
            <a href="#!">
              <i class="material-icons">chevron_right</i>
            </a>        
        </ul>
      </div>
    );
}