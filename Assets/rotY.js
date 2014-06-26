#pragma strict

function Start () {

}

function Update () {
  transform.Rotate(Vector3.up * 10 * Time.deltaTime, Space.World);
}