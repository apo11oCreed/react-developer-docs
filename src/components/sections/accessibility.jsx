import React, { Component } from "react";

class Accessibility extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Abbreviations</h3>
        <p>
          <code className="code">&lt;abbr&gt;</code> tags will be applied to all
          abbreviations within copy.
        </p>
        <dl>
          <dt>Ex.</dt>
          <dd>USA, PR, COD, PO, FPR</dd>
        </dl>
        <dl>
          <dt>Ex.</dt>
          <dd>
            <code className="code">
              &lt;abbr&nbsp;
              <span className="code_highlight">
                style=&quot;border-bottom:none!important;cursor:inherit!important;text-decoration:none!important&quot;
              </span>
              &nbsp;title=&quot;United States of
              America&quot;&gt;USA&lt;/abbr&gt;
            </code>
          </dd>
        </dl>
        <h3>Links</h3>
        <p>
          <code className="code">&lt;a&gt;</code> tags will be underlined and
          responsive. Responsive, in that, there will be a tag optimized for
          mobile interactions and a tag optimized for non-mobile interactions.
        </p>
        <dl>
          <dt>Ex. &mdash; Mobile</dt>
          <dd>
            <code className="code">
              <span className="code_highlight">
                &lt;a class=&quot;visible-xs&quot;
                href=&quot;tel:8003953780&quot;
                style=&quot;text-decoration:underline&quot;&gt;800-395-3780&lt;/a&gt;
              </span>
              &lt;span class=&quot;hidden-xs&quot;
              href=&quot;tel:8003953780&quot;&gt;800-395-3780&lt;/span&gt;
            </code>
          </dd>
        </dl>
        <dl>
          <dt>Ex. &mdash; Non-mobile</dt>
          <dd>
            <code className="code">
              &lt;a class=&quot;visible-xs&quot; href=&quot;tel:8003953780&quot;
              style=&quot;text-decoration:underline&quot;&gt;800-395-3780&lt;/a&gt;
              <span className="code_highlight">
                &lt;span class=&quot;hidden-xs&quot;
                href=&quot;tel:8003953780&quot;&gt;800-395-3780&lt;/span&gt;
              </span>
            </code>
          </dd>
        </dl>
        <h3>HTML Entities</h3>
        <ul>
          <li>
            <span className="bold">&amp;</span>&nbsp;=&nbsp;&amp;amp;
          </li>
          <li>
            <span className="bold">&apos;</span>&nbsp;=&nbsp;&amp;apos;
          </li>
          <li>
            <span className="bold">&ldquo;</span>&nbsp;=&nbsp;&amp;ldquo;
          </li>
          <li>
            <span className="bold">&rdquo;</span>&nbsp;=&nbsp;&amp;rdquo;
          </li>
          <li>
            <span className="bold">&reg;</span>&nbsp;=&nbsp;&amp;reg;
          </li>
          <li>
            <span className="bold">&trade;</span>&nbsp;=&nbsp;&amp;trade;
          </li>
          <li>
            <span className="bold">&copy;</span>&nbsp;=&nbsp;&amp;copy;
          </li>
          <li>
            <span className="bold">&prime;</span> prime{" "}
            <abbr title="also known as">a.k.a.</abbr>
            &nbsp;minutes,&nbsp;<abbr title="feet">ft</abbr>
            &nbsp;=&nbsp;&amp;prime;
          </li>
          <li>
            <span className="bold">&Prime;</span> double prime&nbsp;
            <abbr title="also known as">a.k.a.</abbr> seconds,
            inches&nbsp;=&nbsp;&amp;Prime;
          </li>
        </ul>
        <h3>Tables</h3>
        <p>Tables will generally be formatted as such:</p>
        <dl>
          <dt>Ex.</dt>
          <dl>
            <code className="code">
              &lt;table&gt;&lt;caption&gt;&lt;/caption&gt;&lt;thead&gt;&lt;/thead&gt;&lt;tbody&gt;&lt;th
              scope=&quot;col&quot;&gt;&lt;/th&gt;&lt;tr
              scope=&quot;row&quot;&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;tfoot&gt;&lt;/tfoot&gt;&lt;/table&gt;
            </code>
          </dl>
        </dl>
        <p>
          Creative tables will include&nbsp;
          <code className="code">
            <span className="code_highlight">
              role=&quot;presentation&quot;
            </span>
          </code>
        </p>
        <dl>
          <dt>Ex.</dt>
          <dd>
            <code className="code">
              &lt;table role=&quot;presentation&quot;&gt;
            </code>
          </dd>
        </dl>
        <h3>Copy</h3>
        <p>Copy will be structured using semantic HTML5 markup.</p>
        <dl>
          <dt>Ex.</dt>
          <dl>
            <code className="code">
              &lt;main&gt;&lt;h1&gt;&lt;/h1&gt;&lt;h2&gt;&lt;/h2&gt;&lt;section&gt;&lt;h3&gt;&lt;/h3&gt;&lt;article&gt;&lt;p&gt;&lt;/p&gt;&lt;hr&gt;&lt;p&gt;&lt;/p&gt;&lt;/article&gt;&lt;/section&gt;&lt;/main&gt;
            </code>
          </dl>
        </dl>
      </React.Fragment>
    );
  }
}

export default Accessibility;
